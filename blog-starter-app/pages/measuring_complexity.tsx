import { Title } from "chart.js/dist";
import Layout from "../components/layout";
import Intro from "../components/intro";
import Container from "../components/container";
import PostBody from "../components/post-body";
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'

export default function MeasuringComplexity(){
  const expression = '\frac'
  return (
    <Layout>
      <Container>
        <Intro title="Measuring Complexity"> </Intro>
          <div className="max-w-6xl mx-auto">
            When comes down to music, complexity becomes tricky to measure not only due to subjectivity but to the many other aspects that can be related 
            together in order to enable a more robust estimation and concise approach. Complexity can be defined, for example, in terms of many parameters 
            related to concepts that may involve music theory (e.g., harmony, rythm, etc) or other ones e.g., poetic synthesis.
            Because of that, we decided to analyze solely the lyrical aspect of the songs. 
            Although I don't see very much the point of determining a way to measure and perform comparison between music - other than an attempt to diagnose
            the media massification symptoms such the cultural empoverishment - we did still defined complexity in terms of two measures and analyzed its
            behavior through the years.            
          </div>
          //           
          <p className="max-w-6xl mx-auto">
            One simpler way of defining a measure of complexity of a lyrics is by computing the relation between the amount of repeated terms and the total number of terms in a document.      
            This measure is mostly known as Lexical Richness:<Latex> $L_R$</Latex> <a href="https://www.ufrgs.br/textecc/porlexbras/porpopular/riqueza_lexical.php">[1]</a>.            
          </p>
          \\ 
          <p className="max-w-6xl mx-auto">
          <div>
              "The Lexical richness is a relation established between the number repeated (and different) words of a text, and its total number of words." <a href="https://www.ufrgs.br/textecc/porlexbras/porpopular/riqueza_lexical.php">[1]</a>. 
            </div>
            <Latex >{"$ R_L = \\frac{types}{tokens}$"}</Latex>, where: 
            <div><Latex>$types$</Latex> : Amount of different words in a document.</div>
            <div><Latex>$tokens$</Latex> : Total amount of words of the document.</div>
          </p>
          //
          <p className="max-w-6xl mx-auto">   
            Entropy as a measure of a document's information content: (todo: HEADER)    
            \\
            <div>As a more sophisticated approach to quantify complexity, I thought about computing the average entropy of the songs lyrics released in a period of time.
                As the entropy measure allows to quantify the average level of information content of a document, I therefore considered it as promising approach that   
                would enable to perform an analysis through time.                  
            </div>
            <div>
              Let <Latex>{"$h(w_i) = \\log _{2}(1/P(w_i))$"}</Latex>, the (Shannon) information content of a word <Latex>{"($w_i$) in a document $d_k$"}</Latex>.
            </div>
            \\            
            <div>We can then compute the average information content of a document: <Latex>{"$H(d_k)$"}</Latex>, or entropy (measured in bits), such that:</div>
            \\
            <div><Latex>{"$H(d_k) = \\sum_{i=1}^{j} P(w_i)\\times h(w_i)$  $\\forall w_i \\in d_k=\\{w_1, w_2, \\ldots, w_j\\}$"}</Latex> </div>            
            <div>
                Considering that:
            </div> 
            <div><Latex>{"$V_i =\\{ w_1, w_2, \\ldots, w_n\\}$"}</Latex>: the set of words (or vocabulary) of a dataset. </div>
            <div><Latex>{"$Q_i =\\{ q_1, q_2, \\ldots, q_n\\}$ "}</Latex> : the respective occurrences of a dataset words.</div>
            <div><Latex>{"$P_i = \\{p_1, p_2, \\ldots, p_n\\}$"}</Latex> the ratio  between word occurrences, <Latex>$qi$</Latex>, by the vocabulary lenght <Latex>$|V|$</Latex> such that <Latex>{"$(p_i = \\frac{q_i}{|V|})$"}</Latex>.</div>
            <div><Latex>{"$D_i = \\{d_1, d_2, \\ldots, d_k\\}$"}</Latex>: the set of documents.</div>
            <div>
              \\ 
              </div>
              TODO: aumentar fonte, corrigir espaçamentos, separar em subseções.
              <div>\\</div>
          </p>
      </Container>
      </Layout>
    )
}