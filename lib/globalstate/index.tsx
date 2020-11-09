import { useState } from "react";
import { createContainer } from "unstated-next";

interface LayoutStateTypes {
    loading: boolean;
}

function useLayoutState(initialState = { loading: false }) {
    let [layout, setLayout] = useState<LayoutStateTypes>(initialState);
    let setLoading = (loading: boolean) => setLayout({ loading });
    return { layout, setLoading };
}

const LayoutState = createContainer(useLayoutState);

export default LayoutState;
