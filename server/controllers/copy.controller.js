import Copy from "../model/copy.model.js";

export const getCount = async (req, res) => {
  try {
    const copy = await Copy.findOne();
    if (!copy) {
      return res.status(404).json({ error: "No copies found" });
    }
    res.status(200).json({ count: copy.count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

export const incrementCount = async (req, res) => {
  try {
    let copy = await Copy.findOne();

    copy.count++;
    await copy.save();
    res.status(200).json({ count: copy.count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
