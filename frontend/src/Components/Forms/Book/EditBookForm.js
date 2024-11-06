import React from 'react';
import Button from '@mui/material/Button';
import {FormProvider} from "react-hook-form";
import strings from '../../../localization';
import TextFieldControl from '../../Inputs/TextFieldControl';

const EditBookForm = ({
                      onSubmit,
                      data,
                      form,
                      errors,
                      values,
                      formRules,
                      setValue
                  }) => {

    return (
        <FormProvider {...form}>
            <form id='add-user-form' className='login-form-inputs' action="#">

                <TextFieldControl
                    name='title'
                    rules={formRules['title']}
                    value={values['title']}
                    control={data}
                    error={Boolean(errors.title)}
                    helperText={errors.title && strings.forms.common.thisFieldIsRequired}
                    label={strings.base.book.title}
                />

                <TextFieldControl
                    name='description'
                    rules={formRules['description']}
                    value={values['description']}
                    control={data}
                    error={Boolean(errors.description)}
                    helperText={errors.description && strings.forms.common.thisFieldIsRequired}
                    label={strings.base.book.description}
                />

                <TextFieldControl
                    name='author'
                    control={data}
                    rules={formRules['author']}
                    value={values['author']}
                    error={Boolean(errors.author)}
                    helperText={errors.author && strings.forms.common.thisFieldIsRequired}
                    label={strings.base.book.author}
                />

                <TextFieldControl
                    name='number_pages'
                    rules={formRules['number_pages']}
                    value={values['number_pages']}
                    control={data}
                    type="number"
                    error={Boolean(errors.number_pages)}
                    helperText={errors.number_pages && strings.forms.common.thisFieldIsRequired}
                    label={strings.base.book.number_pages}
                />

                <Button variant="contained" style={{width: '100%'}} onClick={onSubmit}>
                    {strings.forms.common.save}
                </Button>
                
            </form>
        </FormProvider>
    );
}

export default EditBookForm;