import './App.css';
import Main from "./Components/Main";
import Navigation from "./Components/Navigation";
import {useState} from "react";

class TreeNode {
    constructor(key, value, parent = null, checked = false) {
        this.key = key;
        this.value = value;
        this.checked = checked;
        this.parent = parent;
        this.children = [];
    }

    get isLeaf() {
        return this.children.length === 0;
    }

    get hasChildren() {
        return !this.isLeaf;
    }
}

class Tree {
    constructor(key, value = key) {
        this.root = new TreeNode(key, value);
    }

    * preOrderTraversal(node = this.root) {
        yield node;
        if (node.children.length) {
            for (let child of node.children) {
                yield* this.preOrderTraversal(child);
            }
        }
    }

    * postOrderTraversal(node = this.root) {
        if (node.children.length) {
            for (let child of node.children) {
                yield* this.postOrderTraversal(child);
            }
        }
        yield node;
    }

    insert(parentNodeKey, key, value) {
        for (let node of this.preOrderTraversal()) {
            if (node.key === parentNodeKey) {
                node.children.push(new TreeNode(key, value, node));
                return true;
            }
        }
        return false;
    }

    remove(key) {
        for (let node of this.preOrderTraversal()) {
            const filtered = node.children.filter(c => c.key !== key);
            if (filtered.length !== node.children.length) {
                node.children = filtered;
                return true;
            }
        }
        return false;
    }

    find(key) {
        for (let node of this.preOrderTraversal()) {
            if (node.key === key) return node;
        }
        return undefined;
    }

    change(key, newValue) {
        const node = this.find(key);
        if (node) {
            node.value = newValue;
            return true;
        }
        return false;
    }
}

function App() {
    const [somenotes, setSomenotes] = useState(new Tree("first", "first"));

    const getRandomKey =() => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let randomString = '';
        for (let i = 0; i < 6; i++) {
            randomString += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return randomString
    }

    const addNode = (parentNodeKey, value) => {
        const key = getRandomKey()
        setSomenotes(prevSomenotes => {
            const updatedTree = new Tree(prevSomenotes.root.key, prevSomenotes.root.value);
            for (let node of prevSomenotes.preOrderTraversal()) {
                if (node.key === parentNodeKey) {
                    node.children.push(new TreeNode(key, value, node));
                }
                updatedTree.insert(node.parent ? node.parent.key : null, node.key, node.value);
            }
            return updatedTree;
        });
    }

    const changeNote = (key, newValue) => {
        setSomenotes(prevSomenotes => {
            const newTree = prevSomenotes
            newTree.change(key, newValue)
            return newTree
        })
    }

    return (<div className="App">
            <section className="header">
                <div className="header__container __container">
                    <div className="header__body">header</div>
                </div>
            </section>
            <section className="page">
                <div className="page__container __container">
                    <div className="page__body">
                        <Navigation/>
                        <Main somenotes={somenotes} addNote={addNode} changeNote={changeNote}/>
                    </div>
                </div>
            </section>
        </div>);
}

export default App;
