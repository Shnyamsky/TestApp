import { FC } from "react"

import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

import { useAppDispatch } from "../../hooks/store"
import { editActions } from "../../store/reducers"
import { DeleteButton, InputField, NumberInput } from "../../components"
import * as Styled from "./styled"
import { Condition as ConditionType } from "../../types"

const useActions = () => {
  const dispatch = useAppDispatch()

  return {
    addCondition: () => dispatch(editActions.addCondition(null)),
    deleteCondition: (conditionIndex: number) => () => dispatch(editActions.deleteCondition({ conditionIndex })),
    changeConditionText: (conditionIndex: number) => (e) =>
      dispatch(editActions.changeConditionText({ conditionIndex, text: e.target.value })),
    changeConditionScore: (conditionIndex: number) => (e) =>
      dispatch(editActions.changeConditionScore({ score: e.target.value, conditionIndex }))
  }
}

type ConditionProps = {
  conditionIndex: number
  condition: ConditionType
  deleteDisabled: boolean
}

const Condition: FC<ConditionProps> = ({ conditionIndex, condition, deleteDisabled }) => {
  const actions = useActions()

  return (
    <Styled.QuestionCase>
      <Typography variant="h5" component="h5">
        Условие {conditionIndex + 1}
      </Typography>
      <Styled.RowCase>
        <Typography variant="h6" component="h6">
          Если баллов больше чем
        </Typography>
        <NumberInput value={condition.score} onChange={actions.changeConditionScore(conditionIndex)} />
      </Styled.RowCase>

      <Styled.RowCase>
        <InputField
          label="Результат"
          placeholder="Введите результат"
          value={condition.text}
          onChange={actions.changeConditionText(conditionIndex)}
        />
        <DeleteButton onClick={actions.deleteCondition(conditionIndex)} disabled={deleteDisabled} />
      </Styled.RowCase>

      <Button variant="outlined" color="inherit" onClick={actions.addCondition} sx={{ marginTop: "6px" }}>
        Добавить условие
      </Button>
    </Styled.QuestionCase>
  )
}

export default Condition
