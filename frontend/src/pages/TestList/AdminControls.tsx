import { FC, useState } from "react"
import TableCell from "@mui/material/TableCell"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import Typography from "@mui/material/Typography"
import MoreVert from "@mui/icons-material/MoreVert"
import MenuIcon from "@mui/icons-material/Menu"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"

import { Test } from "../../types"
import { useNavigate } from "react-router-dom"
import { useMutation } from "react-query"
import { API } from "../../api"

const AdminControls: FC<Test & { refetchTests: () => void }> = ({ slug, refetchTests }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const deleteMutation = useMutation(API.deleteTest(slug), {
    onSuccess: () => {
      refetchTests()
      setAnchorEl(null)
    }
  })

  const navigate = useNavigate()

  const moveTo = (path) => () => {
    navigate(path)
    setAnchorEl(null)
  }

  const onDeleteClick = () => {
    deleteMutation.mutate()
  }

  return (
    <TableCell>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-haspopup="true"
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        <MoreVert color="secondary" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        sx={{ background: "secondary" }}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
      >
        <MenuItem onClick={moveTo(`/edit/${slug}`)}>
          <ListItemIcon>
            <EditIcon color="secondary" fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Редактировать</Typography>
        </MenuItem>

        <MenuItem onClick={moveTo(`/result/${slug}`)}>
          <ListItemIcon>
            <MenuIcon color="secondary" fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Посмотреть результаты</Typography>
        </MenuItem>

        <MenuItem onClick={onDeleteClick}>
          <ListItemIcon>
            <DeleteIcon color="secondary" fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Удалить</Typography>
        </MenuItem>
      </Menu>
    </TableCell>
  )
}

export default AdminControls
