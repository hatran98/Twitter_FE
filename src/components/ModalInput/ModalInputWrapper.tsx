import { withStyles, WithStyles, Theme } from "@material-ui/core/styles";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";

const styles = (theme: Theme) => ({
    root: {
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused": {
                "& svg path": {
                    fill: theme.palette.primary.main
                }
            },
            "& fieldset": {
                border: 0
            },
            "& .MuiInputAdornment-root": {
                "& svg": {
                    color: theme.palette.text.secondary,
                    height: "1.25em"
                }
            }
        },
        "& .MuiOutlinedInput-input": {
            padding: "12px 14px 14px 5px"
        }
    }
});

type ModalInputWrapperProps = TextFieldProps & WithStyles<typeof styles>;

const ModalInputWrapper = withStyles(styles)(TextField);

export default ModalInputWrapper;
