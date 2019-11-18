import { get } from './definition';

const getNav = get("/comic/classListForAjax");
const getlist = get("/comic/comicListForAjax");
const getDtail = get("/comic/comicInfoForAjax");

export {
	 getlist,
	 getNav,
	 getDtail
}

