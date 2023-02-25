import React from 'react';
import initialData from '../data';
import {intersection} from "./ArrayUtils";
import createPersistedState from 'use-persisted-state';

const useBugsState = createPersistedState('bugs');

// Create the context
const AppContext = React.createContext({
    bugs: initialData.Bugs
});

/**
 * Wraps the given child components in an AppContext.Provider. That Provider's value
 * contains the articles list used by the app, along with a function to add a new article.
 */
function AppContextProvider({children}) {

    const [bugs, setBugs] = useBugsState(initialData.Bugs);

    function updateBugs(bug) {
        const result = []
        bugs.forEach(b => {
            if (b.id === bug.id) {
                result.push(bug)
            } else {
                result.push(b)
            }
        })
        setBugs(result)
    }

    /**
     * Find bugs by params
     * @param params
     * @returns {*}
     */
    function retrieveBugListByParams(params) {
        let result = []
        if (!params.title && (!params.state || params.state.length === 0) && !params.content && !params.consultant && !params.solver) {
            return bugs
        }

        if (params.title) {
            const titleList = retrieveBugListByTitle(params.title)
            if (titleList.length > 0) {
                result = intersection(result, titleList)
            } else {
                return []
            }
        }

        if (params.state && params.state.length > 0) {
            const stateList = retrieveBugListByState(params.state)
            if (stateList.length > 0) {
                result = intersection(result, stateList)
            } else {
                return []
            }
        }

        if (params.content) {
            const contentList = retrieveBugListByContent(params.content)
            if (contentList.length > 0) {
                result = intersection(result, contentList)
            } else {
                return []
            }
        }

        if (params.consultant) {
            const consultantList = retrieveBugListByConsultant(params.consultant)
            if (consultantList.length > 0) {
                result = intersection(result, consultantList)
            } else {
                return []
            }
        }

        if (params.solver) {
            const solverList = retrieveBugListBySolver(params.solver)
            if (solverList.length > 0) {
                result = intersection(result, solverList)
            } else {
                return []
            }
        }
        return result;
    }

    /**
     * Find bugs by id
     * @param id
     * @returns {{consultant: string, createTime: string, updateTime: string, id: number, state: *, title: string, content: string, solver: string} | {consultant: string, createTime: string, updateTime: string, id: number, state: *, title: string, content: string, solver: string} | {consultant: string, createTime: string, updateTime: string, id: number, state: *, title: string, content: string, solver: string} | {consultant: string, createTime: string, updateTime: string, id: number, state: *, title: string, content: string, solver: string} | {consultant: string, createTime: string, updateTime: string, id: number, state: *, title: string, content: string, solver: string}}
     */
    function retrieveBugListByID(id) {
        return bugs.find(a => a.id === parseInt(id));
    }

    /**
     * Find bugs by title
     * @param title
     * @returns {*[]}
     */
    function retrieveBugListByTitle(title) {
        let result = []
        bugs.forEach(bug => {
            if (title && bug.title.toLowerCase().includes(title.toLowerCase())) {
                result.push(bug)
            }
        })
        return result;
    }

    /**
     * Find bugs by state
     * @param state
     * @returns {*[]}
     */
    function retrieveBugListByState(state) {
        let result = []
        bugs.forEach(bug => {
            if (state) {
                state.forEach(s => {
                    if (s === bug.state.value) {
                        result.push(bug)
                    }
                })
            }
        })
        return result
    }

    /**
     * Find bugs by content
     * @param content
     * @returns {*[]}
     */
    function retrieveBugListByContent(content) {
        let result = []
        if (content) {
            bugs.forEach(bug => {
                if (content && bug.content.toLowerCase().includes(content.toLowerCase())) {
                    result.push(bug)
                }
            })
        }
        return result;
    }

    /**
     * Find bugs by consultant
     * @param consultant
     * @returns {*[]}
     */
    function retrieveBugListByConsultant(consultant) {
        let result = []
        if (consultant) {
            bugs.forEach(bug => {
                if (consultant && bug.consultant.toLowerCase().includes(consultant.toLowerCase())) {
                    result.push(bug)
                }
            })
        }
        return result;
    }

    /**
     * Find bugs by solver
     * @param solver
     * @returns {*[]}
     */
    function retrieveBugListBySolver(solver) {
        let result = []
        if (solver) {
            bugs.forEach(bug => {
                if (solver && bug.solver.toLowerCase().includes(solver.toLowerCase())) {
                    result.push(bug)
                }
            })
        }
        return result;
    }

    // The context value that will be supplied to any descendants of this component.
    const context = {
        bugs, retrieveBugListByParams, retrieveBugListByID, updateBugs
    }

    // Wraps the given child components in a Provider for the above context.
    return (<AppContext.Provider value={context}>
        {children}
    </AppContext.Provider>);
}

export {
    AppContext, AppContextProvider
};