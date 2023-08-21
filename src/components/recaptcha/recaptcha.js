// import React from 'react';
// import { render } from 'react-dom';
// import { Formik } from "formik";
// import yup from "yup";
// import Recaptcha from "react-recaptcha";

// class App extends React.Component {
// componentDidMount() {
//     const script = document.createElement("script");
//     script.src =
//     "https://www.google.com/recaptcha/api.js";
//     script.async = true;
//     script.defer = true;
//     document.body.appendChild(script);
// }

// render() {
//     return (
//     <div className="container">
//         <Formik
//         initialValues={{
//             recaptcha: "",
//         }}
//         onSubmit={(values) => {
//             alert(
//             JSON.stringify(
//                 {
//                 recaptcha: values.recaptcha,
//                 },
//                 null,
//                 2
//             )
//             );
//         }}
//         validationSchema={yup.object().shape({
//             recaptcha: yup.string().required(),
//         })}
//         render={({ values, errors, touched, handleSubmit, setFieldValue }) => (
//             <form onSubmit={handleSubmit}>
//             <div className="form-group">
//                 <label>Recaptcha Validation</label>
//                 <Recaptcha
//                 sitekey="6Le2nREUAAAAALYuOv7X9Fe3ysDmOmghtj0dbCKW"
//                 render="explicit"
//                 theme="dark"
//                 verifyCallback={(response) => { setFieldValue("recaptcha", response); }}
//                 onloadCallback={() => { console.log("done loading!"); }}
//                 />
//                 {errors.recaptcha 
//                 && touched.recaptcha && (
//                 <p>{errors.recaptcha}</p>
//                 )}
//             </div>

//             <button type="submit" className="btn btn-primary">submit</button>
//             </form>
//         )} />
//     </div>
//     );
// }
// };

// render(<App />, document.getElementById('root'));
