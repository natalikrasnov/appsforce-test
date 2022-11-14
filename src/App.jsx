import { Header } from "./components"
import strings from "./utils/Strings.json"
import UsersContextProvider from './hookes/context/users.context'
import { MainUsersPage } from "./pages/usersLibrary/MainUsers.component"

function App() {

  return (
    <>
      <Header title={strings["app_name"]} />
      <UsersContextProvider>
        <MainUsersPage />
      </UsersContextProvider>
    </>
  )
}

export default App
