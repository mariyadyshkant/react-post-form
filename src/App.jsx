import { useState } from 'react'
import 'bootstrap'
import './index.css'

function App() {

  return (
    <>
      <div className="container">
        <h1 className="text-center">Post Form</h1>
        <form>
          <div className="card bg-lightp-5 rounded shadow">
            <div className="card-body d-flex flex-column">
              <label htmlFor="author" className="form-label">Autore</label>
              <input type="text" className="form-control" id="author" placeholder="Scrivi il nome dell'autore" />
            </div>
            <div className="card-body d-flex flex-column gap-3">
              <label htmlFor="title" className="form-label">Titolo</label>
              <input type="text" className="form-control" id="title" placeholder="Scrivi il titolo del post" />
            </div>
            <div className="card-body d-flex flex-column gap-3">
              <label htmlFor="body-post" className="form-label">Contenuto</label>
              <textarea className="form-control" id="body-post" rows="5" placeholder="Scrivi il contenuto del post"></textarea>
            </div>
            <div className="card-body">
              <select className="form-select mb-3" aria-label="Default select example">
                <option selected>Seleziona una categoria</option>
                <option value="1">Post pubblico</option>
                <option value="2">Post privato</option>
              </select>
            </div>
            <div className="card-body d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">Invia</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
