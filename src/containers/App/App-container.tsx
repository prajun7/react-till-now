import React from 'react';
import AppView from './App-view';
import {
    Route, Routes, BrowserRouter
} from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

const App: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route
                path="*"
                element={
                <ErrorBoundary onError={(error, info) => console.log(error, info)} fallback={<>Error Page</>}>
                    <AppView />
                </ErrorBoundary>
                }
            />
        </Routes>
    </BrowserRouter>
);

export default App;
