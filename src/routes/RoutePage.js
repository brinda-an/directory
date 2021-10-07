import React, { Suspense, lazy } from 'react'
import { Switch, Route } from "react-router-dom"

const AddPage = lazy(() => import('../Components/AddPage'));
const ViewData = lazy(() => import('../Components/ViewData'));
const UpdatePage = lazy(() => import("../Components/UpdatePage"));

const RoutePage = () => {
    return (
        <Suspense fallback={<div>loading</div>}>
            <Switch>
                <Route path="/view" component={ViewData} />
                <Route path="/add" component={AddPage} />
                <Route path="/update/:id" component={UpdatePage} />
            </Switch>
        </Suspense>
    )
}

export default RoutePage
