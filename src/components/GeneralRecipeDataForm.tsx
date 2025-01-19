import { Box, TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { GeneralRecipeFormErrors } from "./GeneralRecipeDataPage";

type GeneralRecipeDataFormProps = {
  setGeneralRecipeData: React.Dispatch<React.SetStateAction<GeneralRecipeData>>;
  generalRecipeData: GeneralRecipeData;
  generalRecipeErrors: GeneralRecipeFormErrors;
};

export type GeneralRecipeData = {
  name: string;
  author: string;
  time: string;
  difficulty: string;
};

export const EASY_SELECT: string = "easy";

export function GeneralRecipeDataForm({
  setGeneralRecipeData: setGeneralRecipeData,
  generalRecipeData,
  generalRecipeErrors,
}: GeneralRecipeDataFormProps) {
  function onInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const { name, value } = event.target;
    setGeneralRecipeData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        height: "100%",
        overflow: "visible"
      }}
    >
      <TextField
        label="Recipe name"
        name="name"
        variant="outlined"
        onChange={onInputChange}
        value={generalRecipeData.name}
        error={generalRecipeErrors.name.hasError}
        helperText={generalRecipeErrors.name.message}
        slotProps={{ formHelperText: { sx: { position: "absolute", bottom: -20 } } }}
        />
      <TextField
        label="Author"
        variant="outlined"
        onChange={onInputChange}
        name="author"
        value={generalRecipeData.author}
        error={generalRecipeErrors.author.hasError}
        helperText={generalRecipeErrors.author.message}
        slotProps={{ formHelperText: { sx: { position: "absolute", bottom: -20 } } }}
        />
      <TextField
        label="Time"
        variant="outlined"
        name="time"
        onChange={onInputChange}
        value={generalRecipeData.time}
        error={generalRecipeErrors.time.hasError}
        helperText={generalRecipeErrors.time.message}
        slotProps={{ formHelperText: { sx: { position: "absolute", bottom: -20 } } }}
        />
      <TextField
        select
        label="Difficulty"
        variant="outlined"
        name="difficulty"
        onChange={onInputChange}
        value={generalRecipeData.difficulty}
        slotProps={{
          select: {
            native: true,
          },
        }}
      >
        <option value={EASY_SELECT}>Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </TextField>
    </Box>
  );
}
