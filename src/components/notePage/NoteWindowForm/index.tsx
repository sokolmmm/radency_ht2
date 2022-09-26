import React from 'react';

import { Form, Formik } from 'formik';
import { useSelector } from 'react-redux';
import { object, string } from 'yup';

import GreenButton from '../../common/buttons/GreenButton';
import FormikControl, { EnumFormikControl } from '../../common/FormikControl';
import styles from './NoteWindowForm.module.scss';

import { selectAllCategories } from '../../../redux/notes/selectors';

interface INoteWindowForm {
  initialData: {
    name: string;
    category: string;
    content: string;
  };
  onSubmitFunction: (name: string, content: string, category: string) => void;
}

interface IFormValues {
  name: string;
  category: string;
  content: string;
}

function NoteWindowForm({ initialData, onSubmitFunction }: INoteWindowForm): JSX.Element {
  const categories = useSelector(selectAllCategories);

  const initialValues: IFormValues = {
    name: initialData.name,
    category: initialData.category || categories[0],
    content: initialData.content,
  };

  const validationSchema = object({
    name: string().min(5, 'Name length must be more than 5 characters').required('Required'),
    content: string().min(5, 'Name length must be more than 5 characters').required('Required'),
  });

  const onSubmit = (values: IFormValues): void => {
    const { name, content, category } = values;
    onSubmitFunction(name, content, category);
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      enableReinitialize
    >
      {() => (
        <Form className={styles.noteWindowForm}>
          <FormikControl control={EnumFormikControl.INPUT} name="name" label="Name" />

          <FormikControl
            control={EnumFormikControl.SELECT}
            name="category"
            label="Select"
            options={categories}
          />

          <FormikControl control={EnumFormikControl.INPUT} name="content" label="Content" />

          <GreenButton title="Save" isSubmitButton />
        </Form>
      )}
    </Formik>
  );
}

export default NoteWindowForm;
