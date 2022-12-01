"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Box_1 = require("@mui/material/Box");
const IconButton_1 = require("@mui/material/IconButton");
const Input_1 = require("@mui/material/Input");
const FilledInput_1 = require("@mui/material/FilledInput");
const OutlinedInput_1 = require("@mui/material/OutlinedInput");
const InputLabel_1 = require("@mui/material/InputLabel");
const InputAdornment_1 = require("@mui/material/InputAdornment");
const FormHelperText_1 = require("@mui/material/FormHelperText");
const FormControl_1 = require("@mui/material/FormControl");
const TextField_1 = require("@mui/material/TextField");
const Visibility_1 = require("@mui/icons-material/Visibility");
const VisibilityOff_1 = require("@mui/icons-material/VisibilityOff");
function InputAdornments() {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues(Object.assign(Object.assign({}, values), { [prop]: event.target.value }));
    };
    const handleClickShowPassword = () => {
        setValues(Object.assign(Object.assign({}, values), { showPassword: !values.showPassword }));
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (React.createElement(Box_1.default, { sx: { display: 'flex', flexWrap: 'wrap' } },
        React.createElement("div", null,
            React.createElement(TextField_1.default, { label: "With normal TextField", id: "outlined-start-adornment", sx: { m: 1, width: '25ch' }, InputProps: {
                    startAdornment: React.createElement(InputAdornment_1.default, { position: "start" }, "kg"),
                } }),
            React.createElement(FormControl_1.default, { sx: { m: 1, width: '25ch' }, variant: "outlined" },
                React.createElement(OutlinedInput_1.default, { id: "outlined-adornment-weight", value: values.weight, onChange: handleChange('weight'), endAdornment: React.createElement(InputAdornment_1.default, { position: "end" }, "kg"), "aria-describedby": "outlined-weight-helper-text", inputProps: {
                        'aria-label': 'weight',
                    } }),
                React.createElement(FormHelperText_1.default, { id: "outlined-weight-helper-text" }, "Weight")),
            React.createElement(FormControl_1.default, { sx: { m: 1, width: '25ch' }, variant: "outlined" },
                React.createElement(InputLabel_1.default, { htmlFor: "outlined-adornment-password" }, "Password"),
                React.createElement(OutlinedInput_1.default, { id: "outlined-adornment-password", type: values.showPassword ? 'text' : 'password', value: values.password, onChange: handleChange('password'), endAdornment: React.createElement(InputAdornment_1.default, { position: "end" },
                        React.createElement(IconButton_1.default, { "aria-label": "toggle password visibility", onClick: handleClickShowPassword, onMouseDown: handleMouseDownPassword, edge: "end" }, values.showPassword ? React.createElement(VisibilityOff_1.default, null) : React.createElement(Visibility_1.default, null))), label: "Password" })),
            React.createElement(FormControl_1.default, { fullWidth: true, sx: { m: 1 } },
                React.createElement(InputLabel_1.default, { htmlFor: "outlined-adornment-amount" }, "Amount"),
                React.createElement(OutlinedInput_1.default, { id: "outlined-adornment-amount", value: values.amount, onChange: handleChange('amount'), startAdornment: React.createElement(InputAdornment_1.default, { position: "start" }, "$"), label: "Amount" }))),
        React.createElement("div", null,
            React.createElement(TextField_1.default, { label: "With normal TextField", id: "filled-start-adornment", sx: { m: 1, width: '25ch' }, InputProps: {
                    startAdornment: React.createElement(InputAdornment_1.default, { position: "start" }, "kg"),
                }, variant: "filled" }),
            React.createElement(FormControl_1.default, { sx: { m: 1, width: '25ch' }, variant: "filled" },
                React.createElement(FilledInput_1.default, { id: "filled-adornment-weight", value: values.weight, onChange: handleChange('weight'), endAdornment: React.createElement(InputAdornment_1.default, { position: "end" }, "kg"), "aria-describedby": "filled-weight-helper-text", inputProps: {
                        'aria-label': 'weight',
                    } }),
                React.createElement(FormHelperText_1.default, { id: "filled-weight-helper-text" }, "Weight")),
            React.createElement(FormControl_1.default, { sx: { m: 1, width: '25ch' }, variant: "filled" },
                React.createElement(InputLabel_1.default, { htmlFor: "filled-adornment-password" }, "Password"),
                React.createElement(FilledInput_1.default, { id: "filled-adornment-password", type: values.showPassword ? 'text' : 'password', value: values.password, onChange: handleChange('password'), endAdornment: React.createElement(InputAdornment_1.default, { position: "end" },
                        React.createElement(IconButton_1.default, { "aria-label": "toggle password visibility", onClick: handleClickShowPassword, onMouseDown: handleMouseDownPassword, edge: "end" }, values.showPassword ? React.createElement(VisibilityOff_1.default, null) : React.createElement(Visibility_1.default, null))) })),
            React.createElement(FormControl_1.default, { fullWidth: true, sx: { m: 1 }, variant: "filled" },
                React.createElement(InputLabel_1.default, { htmlFor: "filled-adornment-amount" }, "Amount"),
                React.createElement(FilledInput_1.default, { id: "filled-adornment-amount", value: values.amount, onChange: handleChange('amount'), startAdornment: React.createElement(InputAdornment_1.default, { position: "start" }, "$") }))),
        React.createElement("div", null,
            React.createElement(TextField_1.default, { label: "With normal TextField", id: "standard-start-adornment", sx: { m: 1, width: '25ch' }, InputProps: {
                    startAdornment: React.createElement(InputAdornment_1.default, { position: "start" }, "kg"),
                }, variant: "standard" }),
            React.createElement(FormControl_1.default, { variant: "standard", sx: { m: 1, mt: 3, width: '25ch' } },
                React.createElement(Input_1.default, { id: "standard-adornment-weight", value: values.weight, onChange: handleChange('weight'), endAdornment: React.createElement(InputAdornment_1.default, { position: "end" }, "kg"), "aria-describedby": "standard-weight-helper-text", inputProps: {
                        'aria-label': 'weight',
                    } }),
                React.createElement(FormHelperText_1.default, { id: "standard-weight-helper-text" }, "Weight")),
            React.createElement(FormControl_1.default, { sx: { m: 1, width: '25ch' }, variant: "standard" },
                React.createElement(InputLabel_1.default, { htmlFor: "standard-adornment-password" }, "Password"),
                React.createElement(Input_1.default, { id: "standard-adornment-password", type: values.showPassword ? 'text' : 'password', value: values.password, onChange: handleChange('password'), endAdornment: React.createElement(InputAdornment_1.default, { position: "end" },
                        React.createElement(IconButton_1.default, { "aria-label": "toggle password visibility", onClick: handleClickShowPassword, onMouseDown: handleMouseDownPassword }, values.showPassword ? React.createElement(VisibilityOff_1.default, null) : React.createElement(Visibility_1.default, null))) })),
            React.createElement(FormControl_1.default, { fullWidth: true, sx: { m: 1 }, variant: "standard" },
                React.createElement(InputLabel_1.default, { htmlFor: "standard-adornment-amount" }, "Amount"),
                React.createElement(Input_1.default, { id: "standard-adornment-amount", value: values.amount, onChange: handleChange('amount'), startAdornment: React.createElement(InputAdornment_1.default, { position: "start" }, "$") })))));
}
exports.default = InputAdornments;
//# sourceMappingURL=material-form.js.map