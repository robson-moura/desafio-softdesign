import React, { Fragment, useContext, useEffect, useState } from "react";
import strings from "../../localization";
import CustomTable from "../../Components/CustomTable";
import { deleteBook, getAllBooks, getBook, createBook, updateBook } from "../../Services/BookService";
import LoaderContext from "../../Context/LoaderContext"
import { useForm } from "react-hook-form";
import YesNoDialog, { YesNoDialogResult } from "../../Components/YesNoDialog";
import { useNavigate } from "react-router-dom";
import { FilterDefaults } from "../../Util/FilterUtil";
import FullScreenModal from "../../Components/FullScreenModal";
import EditBookForm from "../../Components/Forms/Book/EditBookForm";
import AddBookForm from "../../Components/Forms/Book/AddBookForm";

const formRules = {
  'title': { required: true },
  'description': { required: true }, 
  'author': { required: true },
  'number_pages': { required: true }
}

const tableDescription = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: strings.base.book.title, width: 130 },
  { field: 'description', headerName: strings.base.book.description, width: 130 },
  { field: 'author', headerName: strings.base.book.author, width: 130 },
  { field: 'number_pages', headerName: strings.base.book.number_pages, width: 130 },
]

const BoardBook = () => {

  const {setLoading} = useContext(LoaderContext)
  const navigate = useNavigate()

  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [total, setTotal] = useState(0);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [filter, setFilter] = useState(FilterDefaults);

  const form = useForm();
  const { data, handleSubmit, getValues, setValue, setError, formState: { errors } } = form;

  useEffect(() => {
    fetchAllBooks();
}, [filter]);

  const fetchAllBooks = () => {
      setLoading(true);
      getAllBooks({...filter}).then(response => {
          setBooks(response?.data?.items)
          setTotal(response?.data?.total)
      }).finally(() => setLoading(false));
  }

  const handleEditUser = (book) => {
    getBook({id: book?.id}).then(response => {
      if(response && response?.data) {
        Object.keys(response.data).forEach(key => {
          setValue(key, response.data[key]);
        });
        setShowEditModal(true);
      }
    });
  }

  const onAddSubmit = (data) => {
    setLoading(true);
    createBook(data).then(response => {
      if(response.status !== 200) {
        setLoading(false);
        return setErrorMessage(response?.data?.message)
      }
      handleCloseAddEditBookModal()
      fetchAllBooks()
    });
  }

  const onEditSubmit = (data) => {
    setLoading(true);
    updateBook(data).then(response => {
      if(response.status !== 200) {
        setLoading(false);
        return setErrorMessage(response?.data?.message)
      }
      handleCloseAddEditBookModal()
      fetchAllBooks()
    });
  }

  const handleDeleteBook = (book) => {
    setSelectedBook(book);
    setShowDeleteDialog(true);
  }

  const handleDeleteDialogResult = (result) => {

    if (result === YesNoDialogResult.NO || result === YesNoDialogResult.CANCEL) {
        handleCloseDeleteBookDialog();
        return;
    }

    setLoading(true);

    deleteBook(selectedBook?.id).then(() => {
      handleCloseDeleteBookDialog();
      fetchAllBooks();
    });
  }

  const handleCloseDeleteBookDialog = () => {
    setShowDeleteDialog(false);
    setSelectedBook(null);
  }

  const handleCloseAddEditBookModal = () => {
    setShowEditModal(false);
    setShowAddModal(false);
    form.reset();
  }

  const handleSelectAddBook = () => {
    form.reset(); 
    setShowAddModal(true);
  }

  return (
    <Fragment>

      <div className="main-container" style={{width: 'fit-content'}}>
        <h2>{strings.pages.boardBook.title}</h2>
        <CustomTable 
          tableDescription={tableDescription} 
          data={books} 
          onEdit={handleEditUser} 
          onDelete={handleDeleteBook} 
          filter={filter}
          setFilter={setFilter}
          total={total}
          onReload={fetchAllBooks}
          onAdd={handleSelectAddBook}
        />
      </div>
      
      <FullScreenModal open={showEditModal} onClose={handleCloseAddEditBookModal} title={strings.forms.editBook.title}>
        <EditBookForm
            formRules={formRules}
            values={getValues()}
            setValue={setValue}
            errors={errors} data={data} form={form}
            onSubmit={handleSubmit(onEditSubmit)} />
          { errorMessage && <p className="error" style={{textAlign: 'center'}}>{errorMessage}</p> }
      </FullScreenModal>

      <FullScreenModal open={showAddModal} onClose={handleCloseAddEditBookModal} title={strings.forms.addBook.title}>
        <AddBookForm
            formRules={formRules}
            values={getValues()}
            setValue={setValue}
            errors={errors} data={data} form={form}
            onSubmit={handleSubmit(onAddSubmit)} />
      </FullScreenModal>


      <YesNoDialog show={showDeleteDialog} handleResult={handleDeleteDialogResult}/>
    </Fragment>
  );
};

export default BoardBook;
