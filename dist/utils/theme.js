export const baseClasses = (classes) => {
    const { dimensions, layout, root } = classes || {};
    return [dimensions, layout, root].filter(Boolean);
};
