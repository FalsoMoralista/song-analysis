import { Title } from "chart.js/dist";
import Layout from "../components/layout";
import Intro from "../components/intro";
import Container from "../components/container";
import PostBody from "../components/post-body";
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import CoverImage from "../components/cover-image";
import Header from "../components/header";

export default function QuantifyingComplexity(){  
  return (
    <Layout>
      
    <Container>
    <Header></Header>
      <Intro title="Sailing in Dark Waters: Quantifying Music Complexity"> </Intro>
      <div className="mb-8 md:mb-12">
        <CoverImage title={"teste"} src={"/assets/blog/dynamic-routing/IMG_1923.jpg"} slug={"imageLink"} />
      </div>
      <div className="mb-4 lg:text-lg">
        When comes down to music, complexity becomes tricky to measure not only due to subjectivity but to the many other aspects that can be related 
        together in order to enable a more robust estimation and concise approach. Complexity can be defined, for example, in terms of many parameters 
        related to concepts that may involve music theory (e.g., harmony, rythm), lyrical aspects such as poetic synthesis, etc.
        Because of that, we decided to analyze solely the lyrical aspect of the songs. 
        Although I don't see very much the point of determining a way to measure and perform comparison between music - other than an attempt to diagnose
        the media massification symptoms such the cultural empoverishment - we did still defined complexity in terms of two measures and analyzed its
        behavior through the years.         
      </div>
      <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
        Lexical Richness
      </h3>
      <div className="mb-1 lg:text-lg">
      A simpler way to define a measure for lyrics complexity is to compute the relation between the amount of repeated terms and the total number of terms in a document.      
      This measure is mostly known as Lexical Richness (<Latex> $L_R$</Latex>).
      </div>
      <div className="mb-1 lg:text-lg">
      "The Lexical richness is a relation established between the number repeated (and different) words of a text, and its total number of words." <a href="https://www.ufrgs.br/textecc/porlexbras/porpopular/riqueza_lexical.php">[1]</a>. 
      That is,  <Latex >{"$ R_L = \\frac{types}{tokens}$"}</Latex> , where:
      </div>
      <div className="lg:text-lg"><Latex>$types$</Latex> : Amount of different words in a document.</div>
      <div className="mb-2 lg:text-lg"><Latex>$tokens$</Latex> : Total amount of words of the document.</div>
      <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
        Information content
      </h3>
      <div className="mb-1 lg:text-lg">
        As a more sophisticated approach to quantify complexity, I thought about computing the average entropy of the songs lyrics released in a period of time.
        As the entropy measure allows to quantify the average level of information content of a document, I therefore considered it as promising approach that   
        would enable to perform an analysis through time.     
      </div>

      <article className="mb-2 lg:text-lg">
        <div className="lg:text-lg">Let <Latex>{"$h(w_i) = \\log _{2}(1/P(w_i))$"}</Latex>, the (Shannon) information content of a word <Latex>{"($w_i$) in a document $d_k$"}</Latex>.</div>
        <div className="lg:text-lg">We can then compute the average information content of a document: <Latex>{"$H(d_k)$"}</Latex>, or entropy (measured in bits), such that:</div>
        <div className="lg:text-lg"><Latex>{"$H(d_k) = \\sum_{i=1}^{j} P(w_i)\\times h(w_i)$  $\\forall w_i \\in d_k=\\{w_1, w_2, \\ldots, w_j\\}$"}</Latex> .</div>
        <div className="lg:text-lg">Considering:</div>
        <div className="lg:text-lg"><Latex>{"$V_i =\\{ w_1, w_2, \\ldots, w_n\\}$"}</Latex>: the set of words (or vocabulary) of a dataset. </div>
        <div className="lg:text-lg"><Latex>{"$Q_i =\\{ q_1, q_2, \\ldots, q_n\\}$ "}</Latex> : the respective occurrences of a dataset words.</div>
        <div className="lg:text-lg"><Latex>{"$P_i = \\{p_1, p_2, \\ldots, p_n\\}$"}</Latex> the ratio  between word occurrences, <Latex>$qi$</Latex>, by the vocabulary lenght <Latex>$|V|$</Latex> such that <Latex>{"$(p_i = \\frac{q_i}{|V|})$"}</Latex>.</div>
        <div className="mb-4 lg:text-lg"><Latex>{"$D_i = \\{d_1, d_2, \\ldots, d_k\\}$"}</Latex>: the set of documents.</div>
      </article>
    </Container>
    </Layout>
  )
}