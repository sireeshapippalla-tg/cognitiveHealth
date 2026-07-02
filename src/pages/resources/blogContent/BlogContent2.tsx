import React from "react";
import {
  BlogHeader,
  BlogTitle,
  BlogDate,
  BlogDescription,
  Author,
  SectionTitle,
  SectionTitleSmall,
  SectionContent,
  OutcomeList,
  InlineImageContainer,
  InlineImage,
  ImageCaption,
} from "../BlogDetailPage.style";
import type { Blog } from "../../../data/blogData";

export interface BlogContentProps {
  blog: Blog;
}

import IDPHeader from "../../../assets/Blogs/IDP-Header-768x324.webp";
import IDP1 from "../../../assets/Blogs/IDP1-300x187.webp";
import IDP3 from "../../../assets/Blogs/IDP3-300x169.webp";
import IDP4 from "../../../assets/Blogs/IDP4-300x144.webp";

export const BlogContent2: React.FC<BlogContentProps> = ({ blog }) => (
  <>
    <BlogHeader>
      <BlogDate>{blog.date}</BlogDate>
      <BlogTitle>{blog.title}</BlogTitle>
      <Author>by superadmin | {blog.date}</Author>
      <InlineImageContainer>
        <InlineImage
          src={IDPHeader}
          alt="Manual Document processing can be tedious"
        />
      </InlineImageContainer>
      <BlogDescription>{blog.description}</BlogDescription>
    </BlogHeader>

    <SectionContent>
      But manual processing might find the incoming volume of data very hard to
      manage, not to mention tedious and inefficient. That is why an automatic
      document classification is a great option. Using advance Natural Language
      Processing (NLP) techniques and machine learning algorithms, we can
      automatically classify and process n number of categories, which are
      faster and scalable.
    </SectionContent>

    <InlineImageContainer>
      <InlineImage src={IDP1} alt="Manual Document processing can be tedious" />
      <ImageCaption>Manual Document processing can be tedious.</ImageCaption>
    </InlineImageContainer>

    <SectionContent>
      Document processing is a field of research and a set of production
      processes aimed at making an analog document digital. This includes
      extracting the structure/schema of the document or the layout and then the
      content, which can take the form of text or images. The process can
      involve traditional computer vision algorithms, convolutional neural
      networks, or manual labor.
    </SectionContent>

    <SectionTitle>Conventional Methods</SectionTitle>
    <SectionContent>
      In every industry like Health Care, Insurance, etc, in which paper plays a
      significant role, manual document processing causes problems. Manual
      processing is slow and tedious. It requires employees to perform
      repetitive, monotonous tasks while adding very little value. It is also
      error-prone and not transparent, and thus often causes operational
      inefficiencies. Traditional document processing units required staff
      members to manually read and key in relevant information from documents —
      every day, year after year.
      <br />
      <br />
      This process lowers both staff morale and productivity and often leads to
      unwanted errors and increased costs. On the other hand, document
      classification is the act of labeling — or tagging — documents using
      categories, depending on their content. Document classification can be
      manual (as it is in library science) or automated (within the field of
      computer science) and is used to easily sort and manage texts, images, or
      videos.
    </SectionContent>

    <SectionTitle>AI In Large Scale Document Processing</SectionTitle>
    <SectionContent>
      Depending on the complexity of document processing workflows, the cost
      savings driven by automation may not pay off compared to manual
      processing. Organizations that already employ sophisticated document
      processing systems have a competitive edge. Using Natural Language
      Processing (NLP) and machine learning algorithms, like Bert Transformers,
      Random Forest, etc., we can automatically assign one or more categories to
      huge amounts of textual documents. Machine learning tools are faster,
      scalable, and reliable as compared to humans.
      <br />
      <br />
      Types of ML Algorithms we use during document processing:
    </SectionContent>
    <OutcomeList>
      <li>
        <strong>Supervised:</strong> In this method, we will need to define a
        set of tags (let’s say, Insurance letters, Invoice) and manually tag a
        number of texts before machine learning models can start making
        predictions on their own.
      </li>
      <li>
        <strong>Unsupervised:</strong> In this method, documents containing
        similar words or sentences will be grouped together by a classifier
        without any prior training. For example, the words Medicine,
        prescription, or hospital would be recognized as sharing similar
        qualities and grouped within the same cluster.
      </li>
      <li>
        <strong>Rules-based:</strong> This method is based on linguistic rules
        that give instructions to models. Following these rules and patterns,
        which are based on morphology, lexis, syntax, semantics, and phonology,
        models will automatically tag our texts.
      </li>
    </OutcomeList>

    <InlineImageContainer>
      <InlineImage
        src={IDP3}
        alt="Mine data from any document format with IDP"
      />
      <ImageCaption>Mine data from any document format with IDP.</ImageCaption>
    </InlineImageContainer>

    <SectionTitle>Benefits Of AI in Document Processing</SectionTitle>
    <OutcomeList>
      <li>
        <strong>Reduce document processing cycle time:</strong> Cycle time is a
        key metric tracked by enterprises to measure effectiveness across all
        recurring processes. Reduced document processing cycle time opens new
        opportunities for higher profitability. It helps build resilient
        business processes and makes a company more competitive.
      </li>
      <li>
        <strong>
          Detect errors and anomalies before they reach end applications:
        </strong>{" "}
        AI and ML capabilities mean an IDP solution can automatically detect
        anomalies from the extracted data and notify the operator. And not only
        can the solution identify the factors that can affect your business
        operations immediately but extracted data also can be processed based on
        custom business rules before publishing it to the system of record.
      </li>
      <li>
        <strong>Process many documents coming from multiple channels:</strong>{" "}
        Document processing workflows too often suffer from a lack of
        streamlining, something that IDP addresses. An IDP solution, in
        contrast, can process multiple document types from various channels
        continuously and automatically capture documents from emails (aliases),
        FTP sites, and SharePoint. Documents in almost any format, be it PDF,
        XML, HTML forms, or something else, can be seamlessly processed and
        interpreted.
      </li>
    </OutcomeList>

    <SectionTitle>Algorithm Training</SectionTitle>
    <InlineImageContainer>
      <InlineImage
        src={IDP4}
        alt="Simplified flow of an implemented IDP Pipeline"
      />
      <ImageCaption>
        Simplified flow of an implemented IDP Pipeline.
      </ImageCaption>
    </InlineImageContainer>

    <SectionTitleSmall>
      Dataset
    </SectionTitleSmall>
    <SectionContent>
      This is the most important element we need to gather data for training the
      classifier. The dataset needs to contain enough documents or examples for
      each category so that the algorithm can learn how to differentiate between
      them. For example, if you want to classify documents into five categories,
      for training a classifier you would need at least 100–200 documents per
      category to achieve decent predictive capabilities.
      <br />
      <br />
      Once we have the data to train the model, the next step is to use that
      data to train a classification algorithm. There are many complex
      algorithms that we are currently using including Machine Learning as well
      as Deep Learning:
    </SectionContent>
    <OutcomeList>
      <li>
        <strong>Small Dataset:</strong> In this case, we are using SSD type
        approach, where we are identifying the real-time document with the
        labeled once with the help of calculating distance between their
        embeddings.
      </li>
      <li>
        <strong>Medium-Sized Dataset:</strong> For this scenario, we have built
        multiple models which either we could use individually or in an
        ensembled manner. Few of the algorithms like Random Forest, Xgboost,
        Naïve Bayes, etc.
      </li>
      <li>
        <strong>Large Dataset:</strong> For large Dataset, we have deep learning
        models which could learn the patterns more deeply and accordingly gives
        comparatively high accuracy. Apart from Deep Learning Neural Networks
        like Recurrent Models RNN, LSTM, etc. We are using Transformers like
        BERT, Roberta, etc. for a more contextual understanding of the document
        hence better accuracy.
      </li>
    </OutcomeList>

    <SectionTitle>Conclusion</SectionTitle>
    <SectionContent>
      Documents are some of the richest sources of information for any business.
      Be it articles, customer surveys, or support tickets, all of them contain
      valuable insights. The best way to get to these insights is by classifying
      all the data you receive so you can start making sense of them. Manual
      classification of documents can be a nightmare, especially if the volume
      of information is high. In this scenario, labeling documents becomes
      repetitive and human agents are likely to make mistakes. Document
      classification is much more efficient, cost-effective, and accurate when
      done by machines. Save yourself the hassle of manual analysis and start
      using machine learning for effective document classification. There are
      many classification tools available that make it super easy to start using
      AI for document classification; some of these tools don't even need you to
      write a single line of code.
    </SectionContent>
  </>
);
