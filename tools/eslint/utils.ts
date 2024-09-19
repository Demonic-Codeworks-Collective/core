import { Awaitable, TypedFlatConfigItem } from './types';

const combine = async (
    ...configs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[]>[]
): Promise<TypedFlatConfigItem[]> => (await Promise.all(configs)).flat();

export { combine };
