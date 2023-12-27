import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { DashboardDataContext } from "../Context/DashboardContext";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import * as Yup from "yup";
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Edit() {
  let [title, setTitle] = useState("");
  let [notes, setNotes] = useState("");
  let { Data, setData } = useContext(DashboardDataContext);
  let [initialValues, setIntialvalues] = useState({ title: "", notes: "" });
  const params = useParams();
  const navigate = useNavigate();

  const Userschema = Yup.object().shape({
    title: Yup.string().required("*Required"),
    notes: Yup.string().required("*This Field Should not be Empty"),
  });

  const getData = (index) => {
    const newArray = { ...initialValues };
    newArray.title = Data[index].title;
    newArray.notes = Data[index].notes;
    setIntialvalues(newArray);
  };
  useEffect(() => {
    if (Number(params.id) < Data.length) {
      getData(Number(params.id));
    } else {
      navigate("/dashboard");
    }
  }, []);
  return (
    <Card className="customize-card-edit">
      <Card.Header>
        <div className="card-header">
          <span>Edit a Note</span>
        </div>
      </Card.Header>
      <Card.Body>
        <Formik
          initialValues={initialValues}
          validationSchema={Userschema}
          enableReinitialize={true}
          onSubmit={(values) => {
            let newArray = [...Data];
            newArray.splice(params.id, 1, values);
            setData(newArray);
            navigate("/Dashboard");
          }}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleBlur,
            handleChange,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="title"
                  value={values.title}
                  placeholder="Title"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.title && touched.title ? (
                  <div style={{ color: "red" }}>{errors.title}</div>
                ) : null}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="notes"
                  value={values.notes}
                  placeholder="Take a Note"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.notes && touched.notes ? (
                  <div style={{ color: "red" }}>{errors.notes}</div>
                ) : null}
              </Form.Group>
              <Button variant="primary" className="save-button" type="submit">
                <span className="fa-solid fa-check"></span>
              </Button>
            </Form>
          )}
        </Formik>
      </Card.Body>
    </Card>
  );
}

export default Edit;
