export const snippets = [
  {
    "title": "AVL right rotation",
    "file": "avl-map.h",
    "code": "\t\t\tvoid rotateRight(Node* x) {\n\t\t\t\tNode* y = x->left;\n\t\t\t\tif (!y) return;\n\n\t\t\t\tNode* yRight = y->right;\n\n\t\t\t\t// rotate\n\t\t\t\ty->right = x;\n\t\t\t\tx->left = yRight;\n\n\t\t\t\t// update parent\n\t\t\t\ty->parent = x->parent;\n\t\t\t\tNode* xParent = x->parent;\n\n\t\t\t\tif (xParent == nullptr)\n\t\t\t\t\tpRoot = y;\n\t\t\t\telse if (x == xParent->right)\n\t\t\t\t\txParent->right = y;\n\t\t\t\telse\n\t\t\t\t\txParent->left = y;\n\n\t\t\t\tx->parent = y;\n\t\t\t\tif (yRight)\n\t\t\t\t\tyRight->parent = x;"
  },
  {
    "title": "Disjoint-set merge",
    "file": "disjoint_sets.cpp",
    "code": "void DisjointSets::Join( size_t const& id1, size_t const& id2 ) {\n\t/* .... */\n\tsize_t rep1 = GetRepresentative(id1);\n\tsize_t rep2 = GetRepresentative(id2);\n\n\t//return if already joined\n\tif (rep1 == rep2)\n\t\treturn;\n\t\n\t//check to see which head is larger\n\tsize_t smaller;\n\tsize_t bigger;\n\n\tif (heads[rep1].Size() > heads[rep2].Size()) {\n\t\tsmaller = rep2;\n\t\tbigger = rep1;\n\t}\n\telse {\n\t\tsmaller = rep1;\n\t\tbigger = rep2;\n\t}\n\n\t//Update the represenatives\n\tfor (Node* curr = heads[smaller].GetFirst(); curr != nullptr; curr = curr->Next()) {\n\t\trepresentatives[curr->Value()] = bigger;\n\t}\n\n\t// merge heads\n\theads[bigger].Join(&heads[smaller]);\n}"
  },
  {
    "title": "Priority queue search",
    "file": "water.cpp",
    "code": "    while (!pq.empty()) {\n        T top = pq.top();\n        pq.pop();\n\n        int num = std::get<0>(top);\n        int r = std::get<1>(top);\n        int c = std::get<2>(top);\n\n        if (num > kill[r][c]) continue;\n\n        for (int d = 0; d < 4; ++d) {\n            int numR = r + temp[d];\n            int numC = c + temp1[d];\n            if (numR < 0 || numR >= row || numC < 0 || numC >= col) continue;\n\n            int finalKill = std::max(grid[numR][numC], num);\n            if (finalKill < kill[numR][numC]) {\n                kill[numR][numC] = finalKill;\n                pq.push(std::make_tuple(finalKill, numR, numC));\n            }\n        }"
  },
  {
    "title": "Reference-counted copying",
    "file": "mydeque.cpp",
    "code": "    Deque::Deque(const Deque& rhs) :\n        b(rhs.b), e(rhs.e),\n        size(rhs.size), capacity(rhs.capacity),\n        array(rhs.array), ref_count(rhs.ref_count)\n    {\n        //array = rhs.array;\n        //ref_count = rhs.ref_count;\n        ++(*ref_count);\n    }\n\n    Deque& Deque::operator=(Deque const& rhs)\n    {\n        if (this == &rhs) \n            return *this;\n\n        if (--(*ref_count) == 0) {\n            delete[] array;\n            delete ref_count;\n        }\n        array = rhs.array;\n        b = rhs.b; \n        e = rhs.e;\n        size = rhs.size;\n        capacity = rhs.capacity;\n        ref_count = rhs.ref_count;\n        ++(*ref_count);\n        return *this;\n"
  },
  {
    "title": "Allocation and deallocation",
    "file": "memory_pool.cpp",
    "code": "void* MemoryPool::allocate()\n{\n    if (!freeList) {\n        addPage();\n    }\n\n    //remove front block and return it\n    GenericNode* temp = freeList;\n    freeList = freeList->next;\n    temp->next = nullptr;\n\n    return reinterpret_cast<void *>(temp);\n}\n\nvoid MemoryPool::deallocate(void* ptr)//prob needs changed\n{\n    if (!isBlockPointer(ptr)) {\n        return;\n    }\n    GenericNode* temp = reinterpret_cast<GenericNode*>(ptr);\n    temp->next = freeList;;\n    freeList = temp;\n}"
  }
];
