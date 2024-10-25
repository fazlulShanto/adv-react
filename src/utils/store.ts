import { countModel } from "@/pages/counter/counterModel";
import { Models } from "@rematch/core";

export interface RootModel extends Models<RootModel> {
    count: typeof countModel;
}

export const models: RootModel = { count: countModel };

import { init, RematchDispatch, RematchRootState } from "@rematch/core";
export const store = init({
    models,
});
export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
