// Our collection of insults
// Rule #1: Nothing with the obvious "extreme" curse words. Small stuff like "hell" are okay
// Rule #2: No straight out hate speech/derogitory remarks keep the insult obvious in it's jokey meaning
// For instance: Don't mock someones Gender, Weight, or Sexuality (These are just 3 examples)
// Rule #3: Please when adding new insults keep the arrays alphabetized

// All insults that do not meet the above rules will be met with an instant decline of their PR
module.exports = {
  // Short tier insults: Try to keep it to only a few words
  short: {
    triggers: [
      'eol-last',
      'indent',
      'keyword-spacing',
      'new-cap',
      'new-parens',
      'no-debugger',
      'no-extra-parens',
      'no-fallthrough',
      'no-floating-decimal',
      'no-multiple-empty-lines',
      'no-self-assign',
      'no-self-compare',
      'no-tabs',
      'quotes',
      'yoda'
    ],
    insults: [
      'You boner jockey',
      'You\'re a capitalist pig',
      'You crotch biscuit',
      'You little douche socket',
      'You garbage mammal',
      'You\'re a lazy knob',
      'Why you little commie',
      'You trash waffle'
    ]
  },
  // Medium tier insults: Try to stick to a max of 7-8 words
  medium: {
    insults: [
      'You little anal stinking leg zoo',
      'You\'re such a butter humping melon sack',
      'Why you fart pimping melon breeder',
      'Gah, what a horse faced butter drinker',
      'You lard sniffing poop herder',
      'You stupid seal drinking butt bender',
      'Why you sheep sucking earwax poker',
      'Go away you, wart milking doodle bag'
    ]
  },
  // Long tier insults: Get creative but not too much keep it interesting!
  long: {
    triggers: [
      'brace-style',
      'camelcase',
      'comma-dangle',
      'comma-style',
      'curly',
      'eqeqeq',
      'no-const-assign',
      'no-eval',
      'no-ex-assign',
      'no-extend-native',
      'no-extra-boolean-cast',
      'no-func-assign',
      'no-global-assign',
      'no-tabs',
      'no-throw-literal',
      'no-unreachable',
      'no-unsafe-finally',
      'no-unused-vars'
    ],
    insults: [
      'Do you have to leave so soon? I was just about to poison the tea',
      'Thou art a flesh-monger, a fool and a coward',
      'Have you always hated yourself this much, or is this new',
      'I\'ll go get the .22, go wait out back for me',
      'Do you have no self respect?'
    ]
  }
}
