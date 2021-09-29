import { useState } from 'react';

const useSkill = () => {
    const [activo, setActivo] = useState(false);

    return {
        activo,
        setActivo
    }
}

export {
    useSkill,
}