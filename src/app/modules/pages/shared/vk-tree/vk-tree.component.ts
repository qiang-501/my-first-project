import { Component, OnInit, Input } from '@angular/core';
// import { tableColumns } from 'src/app/modules/home/pages/landing-pages/main-container/vk-main-edit-table/vk-main-edit-tabel.constants';
export interface ItemNode {
  name: string;
  displayName: string;
  field: string;
  checked: boolean;
  expand: boolean;
  indeterminate: boolean;
  display: boolean;
  children?: ItemNode[];
}
@Component({
  selector: 'app-vk-tree',
  templateUrl: './vk-tree.component.html',
  styleUrl: './vk-tree.component.scss',
})
export class VkTreeComponent implements OnInit {
  @Input() dataSource: Array<ItemNode> = [];
  allColumns: Array<ItemNode>;
  ngOnInit(): void {
    this.allColumns = this.dataSource;
  }
  onKeyWordChange(keyWord: any) {
    // make all parent nodes unexpanded if keyWord is empty
    if (keyWord === '') {
      this.allColumns.map((_) => {
        this.unExpandNode(_);
      });
      this.filterNodesByName(keyWord, this.allColumns);
    } else {
      this.allColumns.map((_) => {
        this.expandNode(_);
      });
      this.filterNodesByName(keyWord, this.allColumns);
    }
  }
  unExpandNode(node: ItemNode) {
    if (node.children) {
      node.expand = false;
      node.children.map((_) => {
        this.unExpandNode(_);
      });
    }
  }
  expandNode(node: ItemNode) {
    if (node.children) {
      node.expand = true;
      node.children.map((_) => {
        this.expandNode(_);
      });
    }
  }
  filterNodesByName(target: string, nodes: ItemNode[]) {
    function searchNodes(node: ItemNode) {
      if (node.children && node.children.length > 0) {
        node.children.forEach((child) => {
          searchNodes(child);
        });
        node.display =
          node.children.filter((_) => _.display).length != 0 ? true : false;
      } else {
        if (node.displayName.toLowerCase().includes(target.toLowerCase())) {
          node.display = true;
        } else {
          node.display = false;
        }
      }
    }
    nodes.forEach((node) => {
      searchNodes(node);
    });
  }
  expand(node: ItemNode) {
    node.expand = !node.expand;
  }
  selectAll(node: ItemNode) {
    node.children?.map((_) => {
      if (_.display) {
        _.checked = node.checked;
        _.children?.map((_) => {
          if (_.display) _.checked = node.checked;
        });
      }
    });
  }
  isSomeSelect(node: ItemNode) {
    if (!node.children) return false;
    if (node.children.filter((_) => _.checked).length > 0) return true;
    var flag = false;
    node.children.map((_) => {
      if (_.children && _.children?.filter((f) => f.checked).length > 0) {
        flag = true;
      }
    });
    return flag;
  }
  isAllSelect(node: ItemNode) {
    if (!node.children) return false;
    var flag = false;
    if (node.children.filter((_) => _.checked).length < node.children.length)
      return flag;
    node.children.map((_) => {
      if (
        _.children &&
        _.children?.filter((f) => f.checked).length == _.children.length
      ) {
        flag = true;
      }
    });
    return flag;
  }
  /*checkNodeStatus(node: ItemNode) {
    let isAllSelect = true;
    function checkStatus(node: ItemNode, isAllSelect: boolean) {
      if (node.children) {
        node.children.forEach((child) => {
          checkStatus(child, isAllSelect);
        });
      } else {
        if (!node.checked) isAllSelect = false;
      }
    }
    checkStatus(node, isAllSelect);
    return isAllSelect;
  }*/
  checkNodeStatus(node: ItemNode) {
    function checkStatus(currentNode: ItemNode) {
      if (currentNode.children && currentNode.children.length > 0) {
        for (const child of currentNode.children) {
          if (!checkStatus(child)) {
            return false; // Return false if any child is unchecked
          }
        }
        return true; // Return true if all children are checked
      } else {
        return currentNode.checked; // Return the checked status of the current node
      }
    }

    let nodeStatus = checkStatus(node);
    node.checked = nodeStatus;
    return nodeStatus;
  }
  getSelectedField() {
    let allSelectField: Array<any> = [];
    this.allColumns.map((_) => {
      // _ is a parent node
      this.getSelectedNode(_, allSelectField);
    });
    return allSelectField;
  }
  getSelectedNode(node: ItemNode, selectedNode: Array<any>) {
    if (node.children && node.children.length > 0) {
      node.children.map((_) => {
        // _ is a child node
        this.getSelectedNode(_, selectedNode);
      });
    } else {
      // reach a child node
      if (node.checked) {
        let parentNodeName = '';
        let parentNodeTitle = '';
        let parentNode = this.findParentByDisplayName(node);
        if (parentNode) {
          parentNodeName = parentNode.name;
          parentNodeTitle = parentNode.displayName;
        }
        selectedNode.push({
          parent_node: parentNodeName,
          parent_node_title: parentNodeTitle,
          label: node.displayName,
          field_name: node.field,
        });
      }
    }
  }
  findParentByDisplayName(node: ItemNode) {
    function searchParent(
      currentNode: ItemNode,
      targetName: string
    ): ItemNode | null {
      if (currentNode.children) {
        for (const child of currentNode.children) {
          if (child.displayName === targetName) {
            return currentNode; // Return the parent node if a child matches
          } else {
            const foundNode = searchParent(child, targetName);
            if (foundNode) {
              return foundNode; // Return the parent node if found in the child's subtree
            }
          }
        }
      }
      return null; // Return null if the parent node is not found
    }

    // Iterate through allColumns to find the parent node
    for (const column of this.allColumns) {
      if (column.children) {
        const parentNode = searchParent(column, node.displayName);
        if (parentNode) {
          return parentNode; // Return the parent node
        }
      }
    }

    return null; // Return null if the parent node is not found in the tree
  }
}
