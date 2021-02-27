"""
radar charts from word2vec
"""


def most_sim(model, words):
    """most similar (list)"""
    return model.most_similar(positive=words)


def wv_sim(model, word_w2v, plutchik):
    """wv plutchik similarity (x<->y)"""
    return model.wv.similarity(word_w2v, plutchik)
