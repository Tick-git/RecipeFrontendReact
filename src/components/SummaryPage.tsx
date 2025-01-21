import { PageProps, Recipe } from "../types/types";
import WizardPage from "./WizardPage";
import WizardListBox from "./WizardListBox";
import GeneralSummary from "./GeneralSummary";
import IngredientSummary from "./IngredientSummary";
import InstructionSummary from "./InstructionSummary";

type Props = PageProps & {
  recipe: Recipe;
};

function SummaryPage({ onNextPage, onPreviousPage, recipe }: Props) {
  return (
    <WizardPage nextButtonText="Save" onNextPage={onNextPage} onPreviousPage={onPreviousPage}>
      <WizardListBox>
        <GeneralSummary generalRecipeData={recipe.generalRecipeData} />
        <IngredientSummary ingredients={recipe.ingredients} />
        <InstructionSummary instructions={recipe.instructions} />
      </WizardListBox>
    </WizardPage>
  );
}

export default SummaryPage;
