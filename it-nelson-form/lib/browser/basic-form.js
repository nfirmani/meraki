"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
//import Box from '@mui/material/Box';
const TextField_1 = require("@mui/material/TextField");
const react_hook_form_1 = require("react-hook-form");
function BasicForm() {
    const { register, handleSubmit, formState: { errors }, } = (0, react_hook_form_1.useForm)();
    const onSubmit = (data) => console.log(JSON.stringify(data));
    /*
      return (
    
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
    
      </Box>
    
      );
    */
    return (React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
        React.createElement("input", Object.assign({}, register('firstName'))),
        React.createElement("input", Object.assign({}, register('lastName', { required: true }))),
        errors.lastName && React.createElement("p", null, "Last name is required."),
        React.createElement("input", Object.assign({}, register('age', { pattern: /\d+/ }))),
        errors.age && React.createElement("p", null, "Please enter number for age."),
        React.createElement(TextField_1.default, { id: "outlined-basic", label: "Outlined", variant: "outlined" }),
        React.createElement(TextField_1.default, { id: "filled-basic", label: "Filled", variant: "filled" }),
        React.createElement(TextField_1.default, { id: "standard-basic", label: "Standard", variant: "standard" }),
        React.createElement("input", { type: "submit" })));
}
exports.default = BasicForm;
//# sourceMappingURL=basic-form.js.map