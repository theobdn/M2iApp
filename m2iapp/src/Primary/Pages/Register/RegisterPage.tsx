import { TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";
import { BasicButton } from "../../Components/BasicButton";

interface RegisterPageProps {
    title: string
    setEmail: (email:string) => any
    setPassword: (password:string) => any
    handleAction: () => void
}

export const RegisterPage = ({title, setEmail, setPassword, handleAction} : RegisterPageProps) => {
    return (
        <div>
            <div className="heading-container">
                <h1>{title} Form</h1>
            </div>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="email" label="Enter the Email" type="email" variant="outlined" onChange={(e) => setEmail(e.target.value)}/>
                <TextField id="password" label="Enter the Password" type="password" variant="outlined" onChange={(e) => setPassword(e.target.value)}/>
            </Box>

            <BasicButton title={title} handleAction={handleAction}/>
        </div>
    )
}