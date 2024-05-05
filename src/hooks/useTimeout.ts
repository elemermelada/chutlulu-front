import { useCallback, useEffect, useRef } from "react";

export const useTimeout = () => {
    const timer = useRef<any>(null);
    useEffect(
        () => () => {
            window.clearTimeout(timer.current);
        },
        []
    );

    const setTimeout = useCallback((callback:any, timeout:number) => {
        window.clearTimeout(timer.current);
        timer.current = window.setTimeout(callback, timeout);
    }, []);

    const clearTimeout = useCallback(() => {
        window.clearTimeout(timer.current);
    }, []);

    return [setTimeout, clearTimeout];
};