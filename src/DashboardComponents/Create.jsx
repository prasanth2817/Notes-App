import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { DashboardDataContext } from "../Context/DashboardContext";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import * as Yup from "yup";

function Create() {
  let { Data, setData } = useContext(DashboardDataContext);

  const Userschema = Yup.object().shape({
    title: Yup.string().required("*Required"),
    notes: Yup.string().required("*This Field Should not be Empty"),
  });

  return (
    <Card className="customize-card">
      <Card.Header>
        <div className="card-header">
          <span>Add a Note</span>
        </div>
      </Card.Header>
      <Card.Body>
        <Formik
          initialValues={{ title: "", notes: "" }}
          validationSchema={Userschema}
          onSubmit={(values, { resetForm }) => {
            let newArray = [...Data];
            newArray.unshift(values);
            setData(newArray);
            resetForm();
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
                  className="text-area"
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
                  className="text-area"
                  placeholder="Take a Note"
                  value={values.notes}
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
export default Create;
