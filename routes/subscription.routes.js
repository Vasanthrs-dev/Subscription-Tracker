import { Router } from "express";

const subscriptionRoute = Router();

subscriptionRoute.get("/", (req, res) =>
  res.send({ title: "GET all Subscription" })
);

subscriptionRoute.get("/:id", (req, res) =>
  res.send({ title: "GET a Subscription" })
);

subscriptionRoute.post("/", (req, res) =>
  res.send({ title: "POST a Subscription" })
);

subscriptionRoute.put("/:id", (req, res) =>
  res.send({ title: "PUT a Subscription" })
);

subscriptionRoute.delete("/:id", (req, res) =>
  res.send({ title: "Subscription" })
);

subscriptionRoute.get("/user/:id", (req, res) =>
  res.send({ title: "GET Subscription by a USER" })
);

subscriptionRoute.get("/:id/cancel", (req, res) =>
  res.send({ title: "CANCEL a Subscription" })
);

subscriptionRoute.get("/upcoming-renewals", (req, res) =>
  res.send({ title: "GET upcoming renewals" })
);

export default subscriptionRoute;
