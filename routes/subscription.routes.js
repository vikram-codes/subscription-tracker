import { Router } from "express";

const subscriptioRouter = Router();

subscriptioRouter.get("/", (req, res) =>
  res.send({ title: "GET all subscriptions" })
);
subscriptioRouter.get("/:id", (req, res) =>
  res.send({ title: "GET subscription details" })
);
subscriptioRouter.post("/", (req, res) =>
  res.send({ title: "CREATE subscription" })
);
subscriptioRouter.put("/:id", (req, res) =>
  res.send({ title: "UPDATE subscription" })
);
subscriptioRouter.delete("/", (req, res) =>
  res.send({ title: "DELETE subscription" })
);
subscriptioRouter.put("/:id/cancel", (req, res) =>
  res.send({ title: "CANCEL subscription" })
);
subscriptioRouter.get("/upcoming-renewals", (req, res) =>
  res.send({ title: "GET upcoming renewals" })
);

export default subscriptioRouter;
