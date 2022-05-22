import { FC } from "react"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"

type DeleteButtonProps = {
  onClick: () => any
  disabled?: boolean
}

const DeleteButton: FC<DeleteButtonProps> = ({ onClick, disabled }) => {
  return (
    <IconButton color="secondary" onClick={onClick} disabled={disabled}>
      <DeleteIcon />
    </IconButton>
  )
}

export { DeleteButton }
