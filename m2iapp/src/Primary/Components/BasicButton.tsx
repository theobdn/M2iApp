import { Button } from "@mui/material"

interface BasicButtonProps {
    title:string
    handleAction: () => void
}

export const BasicButton = ({title, handleAction}: BasicButtonProps) => {
    return (
        <Button fullWidth variant="contained" onClick={handleAction}>
            {title}
        </Button>
    )
}