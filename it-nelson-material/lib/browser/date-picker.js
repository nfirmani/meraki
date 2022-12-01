"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const LocalizationProvider_1 = require("@mui/x-date-pickers/LocalizationProvider");
const TextField_1 = require("@mui/material/TextField");
const Stack_1 = require("@mui/material/Stack");
const AdapterDateFns_1 = require("@mui/x-date-pickers/AdapterDateFns");
const TimePicker_1 = require("@mui/x-date-pickers/TimePicker");
const x_date_pickers_1 = require("@mui/x-date-pickers");
const MobileDatePicker_1 = require("@mui/x-date-pickers/MobileDatePicker");
const DesktopDatePicker_1 = require("@mui/x-date-pickers/DesktopDatePicker");
function DatePicker() {
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (React.createElement(LocalizationProvider_1.LocalizationProvider, { dateAdapter: AdapterDateFns_1.AdapterDateFns },
        React.createElement(Stack_1.default, { spacing: 3 },
            React.createElement(DesktopDatePicker_1.DesktopDatePicker, { label: "Date desktop", inputFormat: "dd/MM/yyyy", value: value, onChange: handleChange, renderInput: (params) => React.createElement(TextField_1.default, Object.assign({}, params)) }),
            React.createElement(MobileDatePicker_1.MobileDatePicker, { label: "Date mobile", inputFormat: "MM/dd/yyyy", value: value, onChange: handleChange, renderInput: (params) => React.createElement(TextField_1.default, Object.assign({}, params)) }),
            React.createElement(TimePicker_1.TimePicker, { label: "Time", value: value, onChange: handleChange, renderInput: (params) => React.createElement(TextField_1.default, Object.assign({}, params)) }),
            React.createElement(x_date_pickers_1.DateTimePicker, { label: "Date&Time picker", value: value, onChange: handleChange, renderInput: (params) => React.createElement(TextField_1.default, Object.assign({}, params)) }))));
}
exports.default = DatePicker;
//# sourceMappingURL=date-picker.js.map