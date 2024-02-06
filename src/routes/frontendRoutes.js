import React from 'react'
import {
   createBrowserRouter,
   createRoutesFromElements,
   Route
} from 'react-router-dom'

import Authentication from '../pages/Authentication'
import Contact from '../pages/Contact'
import ErrorPage from '../pages/Error'
import Home from '../pages/Home'
import Landing from '../pages/Landing'
import Layer from '../pages/Layer'
import ReportSituation from '../pages/ReportSituation'
import Dashboard from '../pages/DashBoard'
import EditProfile from '../pages/EditProfile'
import EditProfessional from '../pages/EditProfessional'
import EditTree from '../pages/EditTree'
import EditRiskSituation from '../pages/EditRiskSituation'
import Professional from '../pages/Professional'
import RegisterTree from '../pages/RegisterTree'
import RegisterRisk from '../pages/RegisterRisk'
import RiskSituation from '../pages/RiskSituation'
import Tree from '../pages/Tree'
import Users from '../pages/Users'


const elements = createRoutesFromElements(

<Route path='/' element={<Layer />} errorElement={<ErrorPage />}>

      {/* Rotas Públicas */}
      <Route index element={<Landing />} />
      <Route path='auth' element={<Authentication />} />
      <Route path='contatos' element={<Contact />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='edit/professional' element={<EditProfessional />} />
      <Route path='edit/profile' element={<EditProfile />} />
      <Route path='edit/risksituation' element={<EditRiskSituation />} />
      <Route path='edit/tree' element={<EditTree />} />
      <Route path='error' element={<ErrorPage />} />
      <Route path='home' element={<Home />} />
      <Route path='landing' element={<Landing />} />
      <Route path='layer' element={<Layer />} />
      <Route path='register/tree' element={<RegisterTree />} />
      <Route path='register/risk' element={<RegisterRisk />} />
      <Route path='ocorrencias' element={<ReportSituation />} />
      <Route path='professionals' element={<Professional />} />
      <Route path='risksituation' element={<RiskSituation />} />
      <Route path='tree' element={<Tree />} />
      <Route path='users' element={<Users />} />

      {/* Rotas Privadas */}
      <Route path='cadprodutos' element={<ErrorPage />} />

   </Route>
)

const Router = createBrowserRouter(elements)

export default Router