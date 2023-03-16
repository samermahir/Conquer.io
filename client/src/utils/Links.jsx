import {
	HiOutlineViewGrid,
    HiFolder,

} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
    {
        key: 'files',
        label: 'Files',
        path: '/files',
        icon: <HiFolder />
    }
]
