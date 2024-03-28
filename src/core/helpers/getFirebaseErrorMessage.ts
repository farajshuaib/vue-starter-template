export const getFirebaseErrorMessage = (errorCode: string) => {
    switch (errorCode) {
      case 'auth/invalid-email':
        return 'البريد الإلكتروني غير صحيح'
      case 'auth/user-disabled':
        return 'المستخدم معطل'
      case 'auth/user-not-found':
        return 'المستخدم غير موجود'
      case 'auth/wrong-password':
        return 'كلمة المرور غير صحيحة'
      case 'auth/email-already-in-use':
        return 'البريد الإلكتروني مستخدم من قبل'
      case 'auth/weak-password':
        return 'كلمة المرور ضعيفة'
      case 'auth/operation-not-allowed':
        return 'العملية غير مسموحة'
      case 'auth/account-exists-with-different-credential':
        return 'الحساب موجود ببيانات مختلفة'
      case 'auth/invalid-credential':
        return 'بيانات غير صحيحة'
      case 'auth/invalid-verification-code':
        return 'كود التحقق غير صحيح'
      case 'auth/invalid-verification-id':
        return 'رقم التحقق غير صحيح'
      case 'auth/missing-verification-code':
        return 'كود التحقق مفقود'
      case 'auth/too-many-requests':
        return 'لقد تم ارسال الكثير من رسائل التحقق, يرجى المحاولة لاحقا'
      case 'auth/credential-already-in-use':
        return 'البيانات مستخدمة من قبل'
      case 'auth/invalid-phone-number':
        return 'رقم الهاتف غير صحيح'
      case 'auth/missing-phone-number':
        return 'رقم الهاتف مفقود'
      case 'auth/quota-exceeded':
        return 'تم تجاوز الحد المسموح به'
      case 'auth/code-expired':
        return 'انتهت صلاحية الكود ، يرجى إعادة إرسال الكود مرة أخرى'
      default:
        return 'حدث خطأ غير معروف ، يرجى المحاولة لاحقا'
    }
  }
  