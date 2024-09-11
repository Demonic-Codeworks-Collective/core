const addAtSymbolToRules = rules =>
    Object.fromEntries(
        Object.entries(rules).map(
            ([
                key,
                value,
            ]) => [
                `@${key}`,
                value,
            ],
        ),
    );

export { addAtSymbolToRules };
