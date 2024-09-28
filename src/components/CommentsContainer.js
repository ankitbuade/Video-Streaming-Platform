
import React from 'react'

const commentsData =[
  {
    name :"ankit buade",
    text : "Lorem ipsimLorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim",
    replies:[
      {
        name :"ankit buade",
        text : "Lorem ipsimLorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim",
        replies:[
    
        ]
      }, {
        name :"ankit buade",
        text : "Lorem ipsimLorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim",
        replies:[
    
        ]
      }, {
        name :"ankit buade",
        text : "Lorem ipsimLorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim",
        replies:[
    
        ]
      },
    ]
  },
  {
    name :"ankit buade",
    text : "Lorem ipsimLorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim",
    replies:[
      {
        name :"ankit buade",
        text : "Lorem ipsimLorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim",
        replies:[
          {
            name :"ankit buade",
            text : "Lorem ipsimLorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim",
            replies:[
        
            ]
          }, {
            name :"ankit buade",
            text : "Lorem ipsimLorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim",
            replies:[
        
            ]
          },
        ]
      }, {
        name :"ankit buade",
        text : "Lorem ipsimLorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim",
        replies:[
    
        ]
      }, {
        name :"ankit buade",
        text : "Lorem ipsimLorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim",
        replies:[
    
        ]
      },
    ]
  }, {
    name :"ankit buade",
    text : "Lorem ipsimLorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim",
    replies:[
      {
        name :"ankit buade",
        text : "Lorem ipsimLorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim",
        replies:[
    
        ]
      },{
        name :"ankit buade",
        text : "Lorem ipsimLorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim",
        replies:[
          {
            name :"ankit buade",
            text : "Lorem ipsimLorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim",
            replies:[
        
            ]
          }, 
        ]
      },
    ]
  }, {
    name :"ankit buade",
    text : "Lorem ipsimLorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim",
    replies:[

    ]
  }, {
    name :"ankit buade",
    text : "Lorem ipsimLorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim",
    replies:[

    ]
  }, {
    name :"ankit buade",
    text : "Lorem ipsimLorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim",
    replies:[
      {
        name :"ankit buade",
        text : "Lorem ipsimLorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim",
        replies:[
    
        ]
      },{
        name :"ankit buade",
        text : "Lorem ipsimLorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim Lorem ipsim",
        replies:[
    
        ]
      },
    ]
  },
]

const Comment = ({data})=>{
  const {name , text ,replies} = data
    return <div className='flex ml-3 pt-2 bg-gray-300 my-2'>
    <img className='w-8 h-8 '
           alt='userIcon'
           src='https://cdn-icons-png.flaticon.com/128/1144/1144760.png'
         />
         <div className='px-3 '>
          <p className='font-bold'>{name}</p>
          <p>{text}</p>

          

         </div>
      </div>
}
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
    <Comment  data={comment} />

    <div className='pl-5 border border-l-black ml-5'>
    <CommentsList comments={comment.replies}/>
    </div> 
    </div>
 ));
};
const CommentsContainer = () => {
  return (
    <div>
    <h1 className='font-bold text-2xl'>comments :</h1>
       <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer
