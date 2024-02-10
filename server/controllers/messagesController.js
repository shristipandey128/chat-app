const Messages = require("../models/messageModel");

module.exports.getAllMessage = async (req, res, next) => {
  try {
    const { from, to } = req.body;
    console.log("lin6");
    const messages = await Messages.find({
      users: {
        $all: [from, to],
      },
    }).sort({ updatedAt: 1 });
    console.log("line12");
    const projectMessages = messages.map((msg) => {
      return {
        fromSelf: msg.sender.toString() === from,
        message: msg.message.text,
      };
    });
    console.log("line19");
    res.json(projectMessages);
    console.log("line21");
  } catch (ex) {
    console.log("line23");
    next(ex);
  }
};

module.exports.addMessage = async (req, res, next) => {
  try {
    console.log("line30");
    const { from, to, message } = req.body;
    const data = await Messages.create({
      message: { text: message },
      users: [from, to],
      sender: from,
    });

    if (data) return res.json({ msg: "Message added successfully." });
     return res.json({ msg: "Failed to add message to the database" });
  } catch (ex) {
    next(ex);
  }
};
