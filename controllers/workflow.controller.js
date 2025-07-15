import dayjs from "dayjs";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { serve } = require("@upstash/workflow/express");
import Subscription from "../models/subscription.model.js";
import { sendReminderEmail } from "../utils/send-email.js";

const REMINDERS = [7, 5, 2, 1, 0]; // Days before renewal date to send reminders

export const sendReminders = serve(async (context) => {
  console.log("🔥 Reminder endpoint hit!", context.requestPayload);

  const { subscriptionId } = context.requestPayload;
  const subscription = await fetchSubscription(context, subscriptionId);
  console.log("🧠 Subscription fetched:", subscription);
  console.log("👤 Populated user:", subscription.user);

  if (!subscription || subscription.status !== "active") return;

  const renewalDate = dayjs(subscription.renewalDate);

  console.log("🕓 Current day:", dayjs().format("YYYY-MM-DD"));
  console.log("📅 Renewal date:", renewalDate.format("YYYY-MM-DD"));
  console.log("🧪 isBefore:", renewalDate.isBefore(dayjs(), "day"));

  if (renewalDate.isBefore(dayjs(), "day")) {
    console.log(
      `Renewal date has passed for subscription ${subscriptionId}. Stopping workflow.`
    );
    return;
  }

  for (const daysBefore of REMINDERS) {
    const reminderDate = renewalDate.subtract(daysBefore, "day");

    if (reminderDate.isAfter(dayjs())) {
      await sleepUntilReminder(
        context,
        `Reminder ${daysBefore} days before`,
        reminderDate
      );
    }

    if (dayjs().format("YYYY-MM-DD") === reminderDate.format("YYYY-MM-DD")) {
      await triggerReminder(
        context,
        `${daysBefore} days before reminder`,
        subscription
      );
    }
  }
});

const fetchSubscription = async (context, subscriptionId) => {
  return await context.run("get subscription", async () => {
    return Subscription.findById(subscriptionId).populate("user", "name email");
  });
};

const sleepUntilReminder = async (context, label, date) => {
  console.log(`Sleeping until ${label} reminder at ${date}`);
  await context.sleepUntil(label, date.toDate());
};

const triggerReminder = async (context, label, subscription) => {
  console.log(`📬 Email will be sent to: ${subscription.user.email}`);
  console.log(`🧠 Reminder label: ${label}`);

  await sendReminderEmail({
    to: subscription.user.email,
    type: label,
    subscription,
  });
};
