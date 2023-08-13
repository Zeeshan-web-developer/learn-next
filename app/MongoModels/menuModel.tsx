import mongoose from "mongoose";
const MenuSchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: [true, "Please provide a name for this category."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },

  categoryDescription: {
    type: String,
  },
  items: [
    {
      itemName: {
        type: String,
        required: [true, "Please provide a name for this item."],
        maxlength: [60, "Name cannot be more than 60 characters"],
      },
      itemDescription: {
        type: String,
        required: [true, "Please provide a description for this item."],
        maxlength: [200, "Description cannot be more than 200 characters"],
      },
      price: {
        type: Number,
        required: [true, "Please provide a price for this item."],
        maxlength: [5, "Price cannot be more than 5 characters"],
      },
      image: {
        type: String,
        required: [true, "Please provide a image for this item."],
      },
    },
  ],
});
const Menu = mongoose.models.Menu || mongoose.model("Menu", MenuSchema);
export default Menu;
