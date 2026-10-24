function blockChain(data, prev) {
    if (prev === undefined) {
        prev = { index: 0, hash: '0' };
    }

    const index = prev.index + 1;
    const stringToHash = index + prev.hash + JSON.stringify(data);
    const hash = hashCode(stringToHash);

    const block = {
        index: index,
        data: data,
        prev: prev,
        hash: hash,
        chain: function(nextData) {
            return blockChain(nextData, block);
        }
    };

    return block;
}
