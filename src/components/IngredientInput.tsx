import { Box, Button, TextField } from "@mui/material";
import { Ingredient } from "./IngredientPage";
import { ChangeEvent, useState } from "react";

type Props = {
  addNewIngredient: (ingredient: Ingredient) => void;
};

const GRAMM_UNIT = "g";

function defaultIngredient(): Ingredient {
  return {
    name: "",
    amount: "",
    unit: GRAMM_UNIT,
  };
}

function IngredientInput({ addNewIngredient }: Props) {
  const [ingredientLocal, setIngredientLocal] = useState<Ingredient>(defaultIngredient());

  function onInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const { name, value } = event.target;
    setIngredientLocal((prev) => ({ ...prev, [name]: value }));
  }

  function onAddIngredientClicked(): void {
    setIngredientLocal(defaultIngredient());
    addNewIngredient(ingredientLocal);
  }

  return (
    <Box display={"flex"} flexDirection={"row"} gap={1}>
      <TextField
        onChange={onInputChange}
        value={ingredientLocal.name}
        name="name"
        label="Name"
        size="small"
        variant="outlined"
        sx={{ flex: 3 }}
      />
      <TextField
        label="Amount"
        size="small"
        variant="outlined"
        sx={{ flex: 2 }}
        onChange={onInputChange}
        value={ingredientLocal.amount}
        name="amount"
      />
      <TextField
        select
        label="Unit"
        onChange={onInputChange}
        name="unit"
        variant="outlined"
        size="small"
        value={ingredientLocal.unit}    
        sx={{ flex: 1 }}
        slotProps={{
          select: {
            native: true,
          },
        }}
      >
        <option value={GRAMM_UNIT}>{GRAMM_UNIT}</option>
        <option value="kg">kg</option>
        <option value="ml">ml</option>
        <option value="l">l</option>
      </TextField>
      <Button
        onClick={onAddIngredientClicked}
        variant="contained"
        color="primary"
        sx={{ flex: 0.2 }}
      >
        Add
      </Button>
    </Box>
  );
}

export default IngredientInput;
