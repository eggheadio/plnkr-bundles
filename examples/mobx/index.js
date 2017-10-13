import React from "react"
import { render } from "react-dom"
import { observable, computed } from "mobx"
import { observer } from "mobx-react"

class BookList {
  @observable books = []
  @computed
  get readBooks() {
    return this.books.filter(b => b.isRead)
  }
  loadBooks() {
    setTimeout(() => {
      this.books = [
        {
          title: "The Language Instinct",
          author: "Steven Pinker",
          isRead: true
        },
        {
          title:
            "History of The United States During the Administration of Thomas Jefferson",
          author: "Henry Adams",
          isRead: true
        },
        {
          title:
            "History of The United States During the Administration of James Madison",
          author: "Henry Adams",
          isRead: false
        }
      ].map(b => new Book(b))
    }, 50)
  }
}

class Book {
  @observable isRead = false
  constructor(props) {
    Object.assign(this, props)
  }
  toggleRead() {
    this.isRead = !this.isRead
  }
}

@observer
class MobXTest extends React.Component {
  constructor(props) {
    super()
    props.bookList.loadBooks()
  }
  render() {
    return (
      <div>
        <span>All books:</span>
        <ul>
          {this.props.bookList.books.map(b => (
            <li key={b.title}>
              {b.title}{" "}
              <i
                className={
                  "fa fa-" +
                  (b.isRead ? "check" : "cross")
                }
              />
              <button
                className="btn btn-xs btn-primary"
                onClick={() => b.toggleRead()}
              >
                Toggle Read
              </button>
            </li>
          ))}
        </ul>

        <br />

        <span>Read books:</span>
        <ul>
          {this.props.bookList.readBooks.map(
            b => <li key={b.title}>{b.title}</li>
          )}
        </ul>
      </div>
    )
  }
}

const bookList = new BookList()
render(
  <MobXTest bookList={bookList} />,
  document.getElementById("app")
)
