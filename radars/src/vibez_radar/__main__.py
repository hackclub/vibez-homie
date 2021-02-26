"""
radar charts from word2vec
"""
import pprint
from gensim.models.keyedvectors import KeyedVectors
from .vibez_radar import most_sim, wv_sim


pp = pprint.PrettyPrinter(indent=1, width=1)


def main():
    """module main"""
    # Load Google's pre-trained Word2Vec model.
    f_news = 'data/GoogleNews-vectors-negative300.bin'
    model = KeyedVectors.load_word2vec_format(f_news, binary=True)

    most_sim_words = ['love', 'trust', 'doubt']
    most_sim_result = most_sim(model, most_sim_words)
    pp.pprint({'most_sim': {
        'words': most_sim_words,
        'result': dict(most_sim_result),
    }})

    wv_sim_words = ('resentment', 'dominance')
    wv_sim_result = wv_sim(model, wv_sim_words[0], wv_sim_words[1])
    pp.pprint({'wv_sim': {
        'words': wv_sim_words,
        'result': wv_sim_result,
    }})


main()
