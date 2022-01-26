import { model, Schema } from "mongoose";

interface MoveProps {
  name: string;
  description: string;
}

const schema = new Schema({
  name: String,
  description: String,
  pokemons: [{ type: Schema.Types.ObjectId, ref: "pokemons" }],
});

const TypeModel = model("moves", schema);

export default TypeModel;
